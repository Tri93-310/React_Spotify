// src/components/AlbumList.js
import React from 'react';
import Album from './Album';

const AlbumList = () => {
  const albumIDs = ['4faMbTZifuYsBllYHZsFKJ', '03ZYR4zwCrkSsXTROnK2d0', '3pprs1r3mH3UhU23TUHBWJ', '1vi1WySkgPGkbR8NnQzlXu']; // Thêm album ID ở đây

  return (
    <div>
      <h1 style={{
            textAlign: 'center', // Căn giữa tiêu đề
            fontSize: '3rem', // Kích thước chữ
            background: 'linear-gradient(to right, #6a11cb, #2575fc, #cc2b5e, #753a88)', // Màu gradient galaxy
            WebkitBackgroundClip: 'text', // Chỉ áp dụng gradient cho văn bản
            color: 'white', // Làm cho màu nền không hiển thị
            margin: '20px 0' // Thêm khoảng cách trên và dưới tiêu đề
            }}>
            Spotify Preview
        </h1>


      {albumIDs.map(albumID => (
        <Album key={albumID} albumID={albumID} />
      ))}
    </div>
  );
};

export default AlbumList;
