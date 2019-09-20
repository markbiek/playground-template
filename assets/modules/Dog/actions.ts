export const loadDogImage = async (): Promise<string> => {
    const url: string = 'https://random.dog/woof.json';

    const resp = await fetch(url);
    const data = await resp.json();

    return data.url;
};
