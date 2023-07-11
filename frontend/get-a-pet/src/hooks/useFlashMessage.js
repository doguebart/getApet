import bus from "../utils/bus";

const useFlashMessage = () => {
  const setFlashMessage = (msg, type) => {
    bus.emit("flash", {
      message: msg,
      type,
    });
  };

  return { setFlashMessage };
};

export default useFlashMessage;
