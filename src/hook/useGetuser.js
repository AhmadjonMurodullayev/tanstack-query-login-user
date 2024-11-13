import { useQuery } from "@tanstack/react-query";
import { request } from "../config/request";
import { toast } from "react-toastify";

export const useGetClients = () => {
    return useQuery({
        queryKey: ["clent"],
        queryFn: () => request.get("/clent").then((res) => res.data),
        onSuccess: (data) => {
       toast.success(data.message);
        },
    });
};
