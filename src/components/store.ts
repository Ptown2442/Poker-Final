import { create } from "zustand";

interface PokerData {
    money?: number;
    date?: Date;
    house?: number;
    debt?: number;
    city?: string;
    spouse?: string;
    kids?: number;
}

interface PokerDataStore {
    pokerData: PokerData;
    setHouse: (house: number) => void;
    setDebt: (debt: number) => void;
    setMoney: (money: number) => void;
    setDate: (date: Date) => void;
    setCity: (city: string) => void;
    setSpouse: (spouse: string) => void;
    setKids: (kids: number) => void;
}

const usePokerDataStore = create<PokerDataStore>(set => ({
    pokerData: {},
    setHouse: (house) => set(store => ({ pokerData: { ...store.pokerData, house }})),
    setDebt: (debt) => set(store => ({ pokerData: { ...store.pokerData, debt }})),
    setMoney: (money) => set(store => ({ pokerData: { ...store.pokerData, money }})),
    setDate: (date) => set(store => ({pokerData: { ...store.pokerData, date }})),
    setCity: (city) => set(store => ({ pokerData: { ...store.pokerData, city }})),
    setSpouse: (spouse) => set(store => ({ pokerData: { ...store.pokerData, spouse }})),
    setKids: (kids) => set(store => ({ pokerData: { ...store.pokerData, kids }}))

}))

export default usePokerDataStore;