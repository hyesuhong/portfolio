interface ISubNav<T> {
	listData: T[];
}

export default function SubNav<T>({ listData }: ISubNav<T>) {
	return <ul></ul>;
}
