export default function request (params) {
    return fetch(params).then(res => res.json());
}
