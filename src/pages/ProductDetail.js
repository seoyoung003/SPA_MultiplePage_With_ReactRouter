import { useParams, Link } from "react-router-dom"; // productId를 params의 프롭으로 쓸 수 있음 ..은 이전 페이지를 로딩하라는 것것

function ProductDetailPage() {
    const params = useParams();

    params
    return (
        <>
        <h1>Product Details!</h1>
        <p>{params.productId}</p>
        <p><Link to=".." relative="path">Back</Link></p>
        {/* relative 속성 없이 to ..을 쓰면 produts가 아닌 homepage로 간다. 두 경로 모두 부모 라우터의 자식이므로 ..하면 부모라우터로 이동동*/}
        {/* relative의 기본 속성은 route임 => 부모라우터로 이동, path로 설정하면 경로에서 한 세그먼트만 제거해서 proudcts로 이동*/}
        </>
    )
}

export default ProductDetailPage;