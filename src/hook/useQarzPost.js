import { useMutation } from "@tanstack/react-query";
import { request } from "../config/request";

export const useCreateClientLoan = () => {
    return useMutation({
      mutationFn: (data) => request.post(`/qarz`, data),
      onSuccess: () => {
        client.invalidateQueries({ queryKey: ["clent"] }); 
      },
    });
  };