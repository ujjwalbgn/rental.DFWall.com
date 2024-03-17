import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";

export default function ProductDescription() {
  const router = useRouter();
  const { product } = router.query;
}
