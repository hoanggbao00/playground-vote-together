import { Plus } from "lucide-react";
import { CardSkeleton } from "./skeleton/card-skeleton";
import UserSkeleton from "./skeleton/user-skeleton";

const PostCardAdd = () => {
  return (
    <div className="rounded-lg relative border-4 border-foreground bg-background text-foreground p-4 hover:bg-background/70 cursor-pointer select-none flex gap-5 flex-col items-center">
      <p className="absolute inset-0 flex items-center flex-col justify-center font-bold text-lg">
        Thêm mới
        <Plus />
      </p>
      <CardSkeleton />
      <UserSkeleton />
      <UserSkeleton />
      <UserSkeleton />
    </div>
  )
}

export default PostCardAdd;