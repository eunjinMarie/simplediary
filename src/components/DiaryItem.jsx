import React from 'react';

export default function DiaryItem({
  id,
  author,
  content,
  emotion,
  created_date,
  onDelete,
}) {
  const handleDelete = () => {
    if (window.confirm(`${id + 1}번째 일기를 정말 삭제하시겠습니까?`)) {
      onDelete(id);
    }
  };

  return (
    <div className='DiaryItem'>
      <div className='info'>
        <span className='author_info'>
          작성자 : {author} | 감정점수 : {emotion}
        </span>
        <br />
        <span className='date'>{new Date(created_date).toLocaleString()}</span>
      </div>
      <div className='content'>{content}</div>
      <button onClick={handleDelete}>삭제하기</button>
    </div>
  );
}