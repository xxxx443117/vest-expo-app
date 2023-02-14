import axios from "./axios";

export interface Publisher {
    Id: string; // <string>
    Address: string; //  <string> 用户地址

    DisplayName: string; //  <string> 用户名称

    Avatar: string; //  <string> 用户头像

    Description: string; //  <string> 用户简介

    Domain: string; //  <string> 用户域名
}

export interface ContentDetail {
    id: number;
    title: string; // 标题
    body: string; // <string>内容
    image: string; // <string>列表图片
    timestamp: number; //  <int64>发布时间/秒
    publisher: Publisher
}

interface ListParams  {
    q?: string;
    page: number;
    pageSize: number;
}

export const getContentList = async (params?: ListParams): Promise<ContentDetail[]> => {
    try {
        const res = await axios({
            method: 'get',
            url: 'content/list',
        })
        if (res.data.code === 0) {
            return res.data.data.List;
        }
        return []
    } catch (error) {
        // return data.data.List
        return []
    }
}

export const getContentDetailById = async (id: number): Promise<ContentDetail|null> => {
    try {
        const res = await axios({
            method: 'get',
            url: `content/detail/${id}`,
        })
        if (res.data.code === 0) {
            return res.data.data.Content;
        }
        return null
    } catch (error) {
        return null
    }
}
