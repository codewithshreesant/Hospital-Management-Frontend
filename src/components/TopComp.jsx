export default function TopComp({path, name, desc}) {
    return (
        <div className=" h-[30vh] relative mb-[5rem]">
            <div className="absolute">
                <img src={path} alt="image not found" className="opacity-70 h-[40vh] w-[100vw]" />
            </div>
            <div className="absolute top-[30%] left-[20%]">
                <p className="text-lg text-blue-950 font-semibold">
                Home/{name}
                </p>
                <h2 className="text-3xl font-bold mb-4">{desc}</h2>
            </div>
        </div>
    );
}