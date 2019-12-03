function fileOnChange(e) {
  const files = this.files 

  audio.src = URL.createObjectURL(files[0])
}