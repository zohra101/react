export default function handleSubmit(event = new Event()) {
    event.preventDefault();
    console.log(event);
}