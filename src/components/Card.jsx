
import React from 'react'
import { Box, Button, Card, DropdownMenu, Flex, Inset, Separator, Strong, Text } from "@radix-ui/themes"
import { AiOutlineShoppingCart } from 'react-icons/ai';
import Image from 'next/image';
import Link from 'next/link';


const Cardgrid = ({ link }) => {


    return (
        <Box maxWidth="240px" key={link.name} >
            <Card size="2" className="border-gray-300 ">
                <Inset clip="padding-box" side="top" pb="current">
                   <div className="relative w-full">
                      <Image
                                src={link.img}
                                alt="Bold typography"
                                className="image max-h-[240px] min-h-[240px]
                                 max-w-[240px] min-w-[240px]"
                                width={240} height={240}
                            />
                      </div>
                  </Inset>
               <Separator orientation="horizontal" size="4" my="1" />
             
                <Text as="p" size="3" className="mb-2">
                    {link.description.substring(0, 20)}
                </Text>
                <Text as="p" size="1" className="mb-2">
                    {link.technology.substring(0, 20)}
                </Text>
                <Flex className="justify-between" >
                  
                    <Button variant="surface" mx="2" asChild>
                        <Link href={`${link.url}`} >
                            Live Site
                        </Link>
                    </Button>
                </Flex>
            </Card>
        </Box>

    );
};

export default Cardgrid