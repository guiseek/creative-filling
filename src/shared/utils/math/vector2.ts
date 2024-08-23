export class Vector2 {
  constructor(public x = 0, public y = 0) {}

  set(x: number, y: number) {
    this.x = x;
    this.y = y;
  }

  clone() {
    return new Vector2(this.x, this.y);
  }

  copy(v: Vector2) {
    this.x = v.x;
    this.y = v.y;

    return this;
  }

  add(v: Vector2) {
    this.x += v.x;
    this.y += v.y;

    return this;
  }

  sub(v: Vector2) {
    this.x -= v.x;
    this.y -= v.y;

    return this;
  }

  isCollision(v2: RectLike) {
    const topLeft = v2;
    const clone = new Vector2(topLeft.x, topLeft.y);
    const vector = new Vector2(v2.w, v2.h);
    const bottomRight = clone.add(vector);

    return (
      this.x >= topLeft.x &&
      this.y >= topLeft.y &&
      this.x <= bottomRight.x &&
      this.y <= bottomRight.y
    );
  }
}
