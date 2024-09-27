# FLEX 

## Properties

### `display: flex`

Basic property (and value) to start using flexbox.

<details><summary>

### `justify-content`

</summary>

Aligns items horizontally, accepts the following values:

Value | Description
-- | --
flex-start (default)| Items align to the left side of the container.
flex-end| Items align to the right side of the container.
center| Items align at the center of the container.
space-between| Items display with equal spacing between them.
space-around| Items display with equal spacing around them.
space-evenly| TBA.

</details>


<details><summary>

### `align-items`

</summary>

Aligns items vertically, accepts the following values:

Value | Description
-- | --
flex-start (default)| Items align to the top of the container.
flex-end| Items align to the bottom of the container.
center| Items align at the vertical center of the container.
baseline | Items display at the baseline of the container.
stretch| Items are stretched to fit the container.

</details>


<details><summary>

### `flex-direction`

</summary>

Defines the direction items are placed in the container, accepts the following values:

Value | Description
-- | --
row | Items are placed the same as the text direction.
row-reverse | Items are placed opposite to the text direction.
column | Items are placed top to bottom.
column-reverse | Items are placed bottom to top.

Notice that when the flex direction is a column, `justify-content` changes to the vertical and `align-items` to the horizontal. You can see a more detailed explanation below:

<details><summary>About the axis of flexbox elements</summary>

The flex-direction property determines the main axis of the flex container, which directly influences how justify-content and align-items behave. When you use flex-direction: row, which is the default setting, the main axis runs horizontally. In this case, justify-content will align the items horizontally across the container. If you switch to flex-direction: row-reverse, the main axis is still horizontal, but the items will align from right to left instead.

When you use flex-direction: column, the main axis becomes vertical, meaning that justify-content will now align the items from top to bottom. Conversely, with flex-direction: column-reverse, the main axis remains vertical, but the items will align from bottom to top.

Now, regarding align-items, this property controls alignment along the cross axis, which is perpendicular to the main axis. With flex-direction: row, the cross axis runs vertically, so align-items will align items vertically within the container. If you switch to flex-direction: row-reverse, the situation remains the same, as the cross axis is still vertical.

However, when you set flex-direction: column, the cross axis becomes horizontal, meaning that align-items will align items horizontally across the container. And with flex-direction: column-reverse, the cross axis is still horizontal, so items will align horizontally as well.

In summary, the main axis is controlled by flex-direction, which affects how justify-content aligns items, while the cross axis is perpendicular to the main axis and affects how align-items aligns items.

</details>
</details>