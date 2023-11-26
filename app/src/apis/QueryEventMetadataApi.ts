import axios from "axios";
import type {EventIndexModel} from "@/apis/ContentModels";

export const queryEventMetadata = async function (
    api: string,
    callback: (data: EventIndexModel) => void,
    fallback: () => void = () => {
    }
) {
    await axios.get<EventIndexModel>(api)
        .then(function (response) {
            callback(response.data);
        })
        .catch(fallback);
};