import Image from "next/image";
import Hero from "./component/home/hero";
import Vendor from "./component/common/vendor";

export default function Home() {
	return (
		<>
			<Hero />
			<Vendor />
		</>
	);
}
