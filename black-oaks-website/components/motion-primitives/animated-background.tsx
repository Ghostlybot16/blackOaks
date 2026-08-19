"use client";

import { cn } from "@/lib/utils";
import { AnimatePresence, Transition, motion } from "motion/react";

import {
  Children,
  cloneElement,
  ReactElement,
  ReactNode,
  useId,
  useState,
} from "react";

type AnimatedChildProps = {
  "data-id": string;
  "data-checked"?: "true" | "false";
  className?: string;
  children?: ReactNode;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
  onClick?: () => void;
};

export type AnimatedBackgroundProps = {
  children:
    | ReactElement<AnimatedChildProps>[]
    | ReactElement<AnimatedChildProps>;
  defaultValue?: string;
  onValueChange?: (newActiveId: string | null) => void;
  className?: string;
  transition?: Transition;
  enableHover?: boolean;
};

export function AnimatedBackground({
  children,
  defaultValue,
  onValueChange,
  className,
  transition,
  enableHover = false,
}: AnimatedBackgroundProps) {
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const uniqueId = useId();

  /*
   * When hover is enabled:
   * - hovered item temporarily controls the pill
   * - otherwise the current route/defaultValue controls it
   *
   * When hover is disabled:
   * - a clicked item controls the pill
   * - otherwise defaultValue controls it
   */
  const activeId = enableHover
    ? hoveredId ?? defaultValue ?? null
    : selectedId ?? defaultValue ?? null;

  return Children.map(children, (child, index) => {
    const id = child.props["data-id"];

    const interactionProps = enableHover
      ? {
          onMouseEnter: () => {
            setHoveredId(id);
            onValueChange?.(id);
          },

          onMouseLeave: () => {
            setHoveredId(null);
            onValueChange?.(defaultValue ?? null);
          },
        }
      : {
          onClick: () => {
            setSelectedId(id);
            onValueChange?.(id);
          },
        };

    return cloneElement(
      child,
      {
        key: index,
        className: cn(
          "relative inline-flex",
          child.props.className
        ),
        "data-checked": activeId === id ? "true" : "false",
        ...interactionProps,
      },
      <>
        <AnimatePresence initial={false}>
          {activeId === id && (
            <motion.div
              layoutId={`background-${uniqueId}`}
              className={cn("absolute inset-0", className)}
              transition={transition}
              initial={{
                opacity: defaultValue ? 1 : 0,
              }}
              animate={{
                opacity: 1,
              }}
              exit={{
                opacity: 0,
              }}
            />
          )}
        </AnimatePresence>

        <div className="z-10">
          {child.props.children}
        </div>
      </>
    );
  });
}