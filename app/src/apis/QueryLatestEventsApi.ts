import axios from "axios";
import type {EventIndexModel} from "@/apis/ContentModels";

export interface LatestEventsDto {
    count: number,
    data: EventIndexModel[]
}

export const queryLatestNews = async function (
    locale: string,
    callback: (data: LatestEventsDto) => void,
    fallback: () => void = () => {
    }
) {
    await axios.get<LatestEventsDto>(`/api/events/latest-events.${locale}.json`)
        .then(function (response) {
            callback(response.data);
        })
        .catch(fallback);
};