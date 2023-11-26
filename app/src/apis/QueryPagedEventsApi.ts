import axios from "axios";
import type {EventIndexModel, PageDescriptor} from "@/apis/ContentModels";

export interface PagedEventsDto {
    "_page": PageDescriptor,
    list: EventIndexModel[]
}

const queryPagedEventsImpl = async function (
    api: string,
    callback: (data: PagedEventsDto) => void,
    fallback: () => void = () => {
    }
) {
    await axios.get<PagedEventsDto>(api)
        .then(function (response) {
            callback(response.data);
        })
        .catch(fallback);
};

export const queryPagedEvents = async function (
    pageNumber: number,
    locale: string,
    callback: (data: PagedEventsDto) => void,
    fallback: () => void = () => {
    }
) {
    if (pageNumber < 1)
        pageNumber = 1;
    await queryPagedEventsByIndex(pageNumber - 1, locale, callback, fallback);
};

export const queryPagedEventsByIndex = async function (
    pageIndex: number,
    locale: string,
    callback: (data: PagedEventsDto) => void,
    fallback: () => void = () => {
    }
) {
    if (pageIndex < 0)
        pageIndex = 0;
    const api = pageIndex === 0
        ? `/api/events/list_${locale}.json`
        : `/api/events/list_${pageIndex}_${locale}.json`;
    await queryPagedEventsImpl(api, callback, fallback);
};