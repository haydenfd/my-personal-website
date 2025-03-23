export const copyText = (text) => {
    navigator.clipboard.writeText(text).then(
        () => {
            alert('Just copied haydenfds@gmail.com to your clipboard!');
        },
        (err) => {
            console.error('Failed to copy text: ', err);
        }
    );
};