import { getProduct, getProducts } from "@/service/products";
import { notFound } from "next/navigation";

// Props 타입 정의
type Props = {
    params: {
        slug: string;
    }
}

export default function PantsPage({params: {slug} }: Props) {

    const product = getProduct(slug);

    if(!product) {
        notFound();
    }

    // 서버 파일에 있는 데이터 중 -> 해당 제품의 정보를 찾아서 -> 화면에 표시
    return (
        <h1>{product} 제품 설명 페이지</h1>
    )
}



export function generateStaticParams() {

    // 모든 제품의 페이지들을 미리 만들어둘 수 있게 한다 -> ssg

    const products = getProducts();

    return products.map(product => ({
        slug: product
    }))
}