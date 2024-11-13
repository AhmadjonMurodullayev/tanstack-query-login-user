import { useQuery } from "@tanstack/react-query";
import { request } from "../config/request";

export const useGetClients = () => {
    return useQuery({
        queryKey: ["clent"],
        queryFn: () => request.get("/clent").then((res) => res.data),
        onSuccess: () => {
            client.invalidateQueries(["clent"]);
        },
    });
};
