interface LoadingProps {
  size?: 'sm' | 'md' | 'lg';
  color?: string;
}

export default function Loading({
  size = 'md',
  color = 'border-blue-500',
}: LoadingProps) {
  const sizeClasses = {
    sm: 'w-6 h-6 border-2',
    md: 'w-10 h-10 border-4',
    lg: 'w-16 h-16 border-4',
  };

  return (
    <div className="flex justify-center items-center h-[50vh]">
      <div
        className={`${sizeClasses[size]} ${color} border-t-transparent border-solid rounded-full animate-spin`}
      ></div>
    </div>
  );
}
