function TodoHeader() {
    const today = new Date();
    const year = today.getFullYear();
    const month = today.getMonth() + 1;
    const date = today.getDate();
    return (
        <div className="header">
            <div className="header_inner">
                투두리스트
            </div>
            <div className="today">
                <span>{year}년 </span>
                <span>{month}월 </span>
                <span>{date}일 </span>
            </div>
        </div>
    )
}

export default TodoHeader;