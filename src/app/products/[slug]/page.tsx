type Props = {
    params: {
        slug: string;
    }
}

export default function PantsPage({params}: Props) {

    return (
        <h1>{params.slug} pants page</h1>
    )
}