package main

import "fmt"

func main() {
	matrix := [][]int{
		// name
		{1, 2},
		{2, 1},
		{3, 5},
		{4, 7},
	}
	// count := 0
	// caps := 14
	// boolean := false
	count := 0
	hashSET := make(map[int]struct{})

	for _, passenger := range matrix {
		firstname := passenger[0]
		damage := passenger[1]

		if damage == 5 {
			firstname = 1 //b7dn 1
		}
		if damage == 7 {
			firstname = 2 //b7dn 2
		}
		if _, exists := hashSET[firstname]; exists {
			continue
		}

		count += damage
		hashSET[firstname] = struct{}{}
		fmt.Printf("Person %d caused %d damage. count now: %d\n", firstname, damage, count)
		if count >= 15 {
			fmt.Println("boooooooom")
			return
		}

	}
	fmt.Printf("final count is : %v", count)
}
