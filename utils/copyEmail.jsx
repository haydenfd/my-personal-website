export const copyText = (text) => {
    navigator.clipboard.writeText(text).then(
        () => {
            alert('Copied haydenfds@gmail.com to clipboard!');
        },
        (err) => {
            console.error('Failed to copy text: ', err);
        }
    );
};