import Image from "next/image"
import profile1 from "/public/profile/profile1.webp"
import profile2 from "/public/profile/profile2.webp"
import Star from '/public/home/star.svg'

export default function UserReview() {
    return (
        <div className="w-[600px]">
            <div>
                <div className="flex m-4 mt-8 items-center">
                    <div className="relative w-12 h-12">
                        <Image src={profile1} layout="fill" objectFit="cover" className="rounded-full" />
                    </div>
                    <span className="text-lg mx-4">Sepher</span>
                </div>
                <div className="flex m-4 items-center">
                    <Star width="12" height="12" />
                    <Star width="12" height="12" />
                    <Star width="12" height="12" />
                    <Star width="12" height="12" />
                    <Star width="12" height="12" />
                    <span className="text-xs mx-2">2024년 2월</span>
                    <span className="text-xs mx-1 text-gray-400">하룻밤 숙박</span>
                </div>
                <div className="m-4 text-md">
                    혼자 여행하며 정말 즐거운 시간을 보냈습니다. 매우 평화로웠습니다! 트립은 매우 합리적인 가격이며 놀라운 가이드가 제공합니다.
                </div>
            </div>
            <div>
                <div className="flex m-4 mt-8 items-center">
                        <div className="relative w-12 h-12">
                            <Image src={profile2} layout="fill" objectFit="cover" className="rounded-full" />
                        </div>
                        <span className="text-lg mx-4">Yasmina</span>
                    </div>
                    <div className="flex m-4 items-center">
                        <Star width="12" height="12" />
                        <Star width="12" height="12" />
                        <Star width="12" height="12" />
                        <Star width="12" height="12" />
                        <span className="text-xs mx-2">2024년 2월</span>
                        <span className="text-xs mx-1 text-gray-400">하룻밤 숙박</span>
                    </div>
                    <div className="m-4 text-md">
                        훌륭한 경험, 평화롭고 편안한 장소. 호스트 셰이커와 그의 팀은 베두인 세계에 완전히 몰입할 수 있도록 해주었습니다. 
                        숨막히는 풍경으로 세상과 단절되어 사막의 아름다움을 만끽할 수 있습니다. 전망을 감상할 수 있는 4x4 액티비티를 적극 추천합니다.
                    </div>
                </div>
        </div>
    )
}