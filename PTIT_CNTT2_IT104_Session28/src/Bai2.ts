type Callback = () => void;

const delayedCallback = (callback: Callback, delay: number): void => {
    setTimeout(callback, delay);
};
const myCallback: Callback = (): void => {
    console.log("Sau 2s hamf ddc goij");
};
delayedCallback(myCallback, 2000);
