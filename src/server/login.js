import { request } from "../config/request";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { saveState } from "../config/store";

export const useCreateUsers = () => {
  return useMutation({
    mutationFn: (data) => request.post("/login", data).then((res) => res.data),
    onSuccess: (data) => {
      saveState("userData",data);
      toast.success("Sign in successful!");
    },
    onError: () => {
      toast.error("Sign-in failed, please try again.");
    },
  });
};
