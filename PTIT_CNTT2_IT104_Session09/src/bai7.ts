type User = {
    id: number
    name: string
    email: string
    age?: number
}
type UserUpdates = {
    name?: string
    email?: string
    age?: number
    id?: number
}
function updateUser(user: User, updates: UserUpdates): User | string {
    if (updates.id !== undefined) {
        return "ID ko thay doi dc"
    }
    return { ...user, ...updates, }
}
const user1: User = {
    id: 1,
    name: "songoku",
    email: "skibidi@toilet.com",
}
const updates1 = {
    name: "songohan",
}
console.log(updateUser(user1, updates1))