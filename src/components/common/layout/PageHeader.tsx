import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";


type Props = {
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onClick?: () => void;
    isSearch?: boolean;
    title: string;
    description?: string;
}

export default function PageHeader({
    onChange,
    onClick,
    isSearch = true,
    title,
    description,
}: Readonly<Props>) {
    return (
        <div className="flex flex-col my-5 md:my-16 md:flex-row md:justify-between md:items-start gap-5">
            <div className="flex flex-col gap-1 md:gap-3">
                <h1 className="text-3xl md:text-5xl font-bold">{title}</h1>
                <h3 className="text-xs md:text-sm">{description}</h3>
            </div>
            <div className={`gap-5 ${!isSearch ? "hidden" : "flex"}`}>
                <Input
                    className="border-hgray-300 md:min-w-64"
                    placeholder="Search properties..."
                    onChange={onChange}
                />
                <Button variant="fillBlack" onClick={onClick}>Search</Button>
            </div>
        </div>
    )
}