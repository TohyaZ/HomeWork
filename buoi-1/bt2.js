function unique(arr) {
    return Array.from(new Set(arr)) //
  }
  console.log(unique([1, 2, 3, 4, 5, 6, 7, 8, 4, 4, 4, 5]))

// Hàm Set(arr) dc dùng để tạo ra một hàm mới mà các phần tử trong này không bị trùng lập
// Hàm Array.from dc dùng để chuyển đổi thành một mảng chứa các phần tử duy nhất của Set(arr)