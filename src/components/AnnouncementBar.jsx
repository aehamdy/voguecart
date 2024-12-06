/* eslint-disable react/prop-types */
function AnnouncementBar ({ hideAnnouncementBar }) {
    return (
        <div className={`absolute w-full start-0 top-0 flex gap-4 justify-center items-center py-1 text-primary-light bg-muted-blue`}>
            <p className="">🔥 Don&apos;t miss our White Friday <span>Sale 75% Off</span></p>
            <span onClick={hideAnnouncementBar} className="justify-self-end cursor-pointer">X</span>
        </div>
    );
};

export default AnnouncementBar;