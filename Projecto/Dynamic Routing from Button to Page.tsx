📘 Concepts Learned
1. Dynamic Routing with router.push

What it is:
router.push is a programmatic way in Next.js to navigate between pages.

When to use:
Use it when you want to handle navigation inside an event handler (like button click, form submit, conditional redirects).

How it works:
It accepts a string (URL path). You can build the path dynamically using template strings (like /${country}/${lang}/help-center).

2. Navigation with Link and href

What it is:
<Link></Link> is a React component from Next.js that provides client-side navigation for faster page loads.

When to use:
Use it when you need a static navigation element like menus, navbars, or inline links.

How it works:
You pass the href directly to Link. If you want to wrap custom UI (like a Button), you can use asChild.

3. Choosing Between router.push vs Link
  
Use router.push → for programmatic actions (onClick, condition-based redirects).
Use Link → for simple link navigation (menus, static buttons).

Think of it like:
router.push = telling a driver “Go to this address when I press the horn”.
Link = putting a GPS location directly in Google Maps and just clicking it.

✅ Code Snippets for Reference
  
Option 1: Programmatic Navigation with router.push

'use client';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import Text from '../Text';

interface Props {
  country: string;
  lang: string;
}

export default function ReturnButton({ country, lang }: Props) {
  const router = useRouter();

  return (
    <Button
      variant="transparent"
      className="w-fit p-0 underline"
      onClick={() => router.push(`/${country}/${lang}/help-center`)}
    >
      <Text
        size="datetitle"
        font="montserrat"
        weight="medium"
        color="categorytext"
        as="p"
      >
        Return / Exchange
      </Text>
    </Button>
  );
}

Option 2: Static Navigation with Link

'use client';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { useTheme } from '@/lib/context/ThemeContext';
import { useRouter } from 'next/navigation';
import Text from '../Text';

interface Props {
  country: string;
  lang: string;
}

export default function ReturnButton({ country, lang }: Props) {

  const router = useRouter();
  const { lang, country } = useTheme();
  
  return (
    <Link href={`/${country}/${lang}/help-center`} passHref>
      <Button variant="transparent" className="w-fit p-0 underline" asChild>
        <Text
          size="datetitle"
          font="montserrat"
          weight="medium"
          color="categorytext"
          as="p"
        >
          Return / Exchange
        </Text>
      </Button>
    </Link>
  );
}

  
