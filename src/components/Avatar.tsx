interface AvatarProps {
    imageUrl: string;
}

export default function Avatar({ imageUrl }: AvatarProps) {
    return (
        <div className="avatar">
            <div className="w-24 rounded-full">
                <img src={imageUrl} />
            </div>
        </div>
    )
}