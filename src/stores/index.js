import create from 'zustand'

const sidebarStore = create(set => ({
    is: 'hidden',
    update: data => set(state => state.is = data)
}))

const userStore = create(set => ({
    info: {},
    update: data => set(state => state.info = data)
}))

const roomStore = create(set => ({
    id: '',
    update: data => set(state => state.id = data)
}))

export { userStore, sidebarStore, roomStore }