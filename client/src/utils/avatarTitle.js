export default function avatarTitle(title) {
    return title
        .split(' ')
        .map(word => word[0])
        .map(char => char.toUpperCase())
        .slice(0, 2)
        .join('');

}
