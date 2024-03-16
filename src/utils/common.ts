import Swal from "sweetalert2";

const setSession = (iCount: number) => {
  sessionStorage.setItem(
    "countLoading",
    (Number(sessionStorage.getItem("countLoading")) + iCount).toString()
  );
};

const customButton = Swal.mixin({
  customClass: {
    confirmButton: "primary-button capitalize-text fontsize--14",
    cancelButton: "secondary-button capitalize-text fontsize--14 ",
  },
  buttonsStyling: false,
});

const openConfirm = ({
  title,
  text,
  confirmButtonText,
  cancelButtonText,
}: {
  title?: string;
  text?: string;
  confirmButtonText?: string;
  cancelButtonText?: string;
}) => {
  return customButton.fire({
    title: title,
    text: text,
    showCloseButton: true,
    showCancelButton: true,
    confirmButtonText: confirmButtonText,
    cancelButtonText: cancelButtonText || "Cancel",
  });
};
export default {
  setSession,
  openConfirm,
};
