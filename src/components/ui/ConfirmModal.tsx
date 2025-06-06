import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@/components/ui/alert-dialog';

interface ReusableConfirmDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  title?: string;
  description?: string;
  confirmText?: string;
  cancelText?: string;
  onConfirm: () => void;
}

export default function ConfirmModal({
  open,
  onOpenChange,
  title = '정말로 진행하시겠습니까?',
  description = '이 작업은 되돌릴 수 없습니다.',
  confirmText = '확인',
  cancelText = '취소',
  onConfirm,
}: ReusableConfirmDialogProps) {
  return (
    <AlertDialog open={open} onOpenChange={onOpenChange}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle className="text-left">{title}</AlertDialogTitle>
          <AlertDialogDescription className="text-left">
            {description}
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter className="block text-right space-x-1.5">
          <AlertDialogCancel
            className="bg-white rounded-[3.125rem] py-3 px-6 hover:bg-white
            cursor-pointer text-green hover:text-green
            border-green"
          >
            {cancelText}
          </AlertDialogCancel>
          <AlertDialogAction
            className="bg-green rounded-[3.125rem] py-3 px-6 hover:bg-green
            cursor-pointer text-white hover:text-white"
            onClick={onConfirm}
          >
            {confirmText}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
