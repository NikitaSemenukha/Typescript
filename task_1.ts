interface jsonInfo{
    desc: string,
    isActive: boolean
};

interface jsonTags{
    name: string,
    value: number
}

interface Json{
    userId: number,
    id: number,
    title: string,
    info: jsonInfo,
    tags: jsonTags[]
};