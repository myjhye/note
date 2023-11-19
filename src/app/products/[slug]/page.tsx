import { getProduct, getProducts } from "@/service/products";
import { notFound } from "next/navigation";

// Props 타입 정의
type Props = {
    params: {
        slug: string;
    }
}

export default async function ProductPage({params: {slug} }: Props) {

    const product = await getProduct(slug);

    if(!product) {
        notFound();
    }

    // 서버 파일에 있는 데이터 중 -> 해당 제품의 정보를 찾아서 -> 화면에 표시
    return (
        <h1>{product.name} 제품 상세 페이지</h1>
    )
}



export async function generateStaticParams() {

    // 모든 제품의 페이지들을 미리 만들어둘 수 있게 한다 -> ssg

    const products = await getProducts();

    return products.map((product) => ({
        slug: product.id
    }))
}