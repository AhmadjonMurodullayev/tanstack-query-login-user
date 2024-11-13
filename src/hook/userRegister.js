import { useMutation } from "@tanstack/react-query";
import { request } from "../config/request";
import { saveState } from "../config/store";
import { toast } from "react-toastify";

export const useRegister = () => {
  return useMutation({
    mutationFn: (data) =>
      request.post("/register", data).then((res) => res.data),
    onSuccess: (data) => {
      saveState("userData", data);
      toast.success("Sign up successful!");
    },
    onError: (data) => {
      toast.error(data.response.data.message);
    },
  });
};
