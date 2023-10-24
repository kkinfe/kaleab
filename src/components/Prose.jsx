import clsx from "clsx";

export function Prose({ as: Component = "div", className, ...props }) {
  return (
    <Component
      className={clsx(
        className,
        "pt-6 prose prose-lg text-xl max-w-none dark:prose-invert ",
        "dark:prose-hr:border-zinc-800"
      )}
      {...props}
    />
  );
}
