import Swal from "sweetalert2";

const setSession = (iCount: number) => {
  sessionStorage.setItem(
    "countLoading",
    (Number(sessionStorage.getItem("countLoading")) + iCount).toString()
  );
};

const customButton = Swal.mixin({
  customClass: {
    confirmButton: "primary-button",
    cancelButton: "secondary-button",
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

const openError = ({
  title,
  text,
}: {
  title?: string;
  text?: string;
  confirmButtonText?: string;
  cancelButtonText?: string;
}) => {
  return customButton.fire({
    title: title,
    text,
    type: "error",
    width: "600px",
  });
};

//image sizes for tmdb
const img_300 = "https://image.tmdb.org/t/p/w300";
const img_500 = "https://image.tmdb.org/t/p/w500";

// contentModal and singleContent
const unavailable = "https://www.movienewz.com/img/films/poster-holder.jpg";

// contentModal
const unavailableLandscape =
  "https://user-images.githubusercontent.com/10515204/56117400-9a911800-5f85-11e9-878b-3f998609a6c8.jpg";

export default {
  setSession,
  openConfirm,
  openError,
  img_300,
  img_500,
  unavailable,
  unavailableLandscape,
};
