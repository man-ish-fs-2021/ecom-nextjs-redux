import { twMerge } from "tailwind-merge";

const Skeleton = ({
    className,
    ...props
  }: React.HTMLAttributes<HTMLDivElement>) => {
    return (
      <div
        className={twMerge("animate-pulse rounded-md bg-neutral-200", className)}
        {...props}
      />
    )
  }
export default Skeleton;