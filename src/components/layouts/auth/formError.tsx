import { X } from "lucide-react";

export default function FormError({ message }: { message?: string }) {
  if (!message) return null;
  return (
    <div className="bg-destructive/10 p-3 rounded-md flex items-center gap-x-2 text-sm text-destructive">
      <X className="w-5" />
      <p>{message}</p>
    </div>
  );
}
