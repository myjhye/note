// Props 타입 정의
type Props = {
    params: {
        slug: string;
    }
}

export default function PantsPage({params}: Props) {

    return (
        // slug 사용해 페이지 제목을 렌더링
        <h1>{params.slug} pants page</h1>
    )
}

// 초기 데이터 생성 함수 정의
export function generateStaticParams() {

    // 제품 목록 배열
    const products = ['pants', 'skirt'];

    return products.map(product => ({
        // 각 제품에 대한 slug 생성
        slug: product
    }))
}